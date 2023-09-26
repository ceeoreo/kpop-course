import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const coursesDirectory = path.join(process.cwd(), 'courses');

export function getSortedCoursesData() {
  
  const fileNames = fs.readdirSync(coursesDirectory);
  const allCoursesData = fileNames.map((fileName) => {

    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(coursesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

  
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allCoursesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllCourseIds() {
  const fileNames = fs.readdirSync(coursesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  });
}

export async function getCourseData(id) {
  const fullPath = path.join(coursesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}