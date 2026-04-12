import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

interface Provider {
  id: string;
  name: string;
  title: string;
  category: string;
  categories?: string[];
  order: number;
  bio?: string;
  image?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface PageContent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readJsonFile(filePath: string): any {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

function getFilesInDirectory(dir: string, extension: string = '.json'): string[] {
  try {
    if (!fs.existsSync(dir)) {
      return [];
    }
    return fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(extension))
      .map((file) => path.join(dir, file));
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

export function getProviders(): Provider[] {
  const providersDir = path.join(CONTENT_DIR, 'providers');
  const files = getFilesInDirectory(providersDir);

  const providers: Provider[] = files
    .map((file) => {
      const data = readJsonFile(file);
      if (data) {
        data.id = path.basename(file, '.json');
      }
      return data;
    })
    .filter((provider): provider is Provider => provider !== null);

  return providers.sort((a, b) => {
    const lastNameA = a.name.split(' ').slice(-1)[0].toLowerCase();
    const lastNameB = b.name.split(' ').slice(-1)[0].toLowerCase();
    return lastNameA.localeCompare(lastNameB);
  });
}

export function getProvider(id: string): Provider | null {
  const providers = getProviders();
  return providers.find((p) => p.id === id) || null;
}

export function getProvidersByCategory(category: string): Provider[] {
  return getProviders().filter((provider) => {
    const cats = provider.categories || (provider.category ? [provider.category] : []);
    return cats.some((c) => c.toLowerCase() === category.toLowerCase());
  });
}

export function getJobs(): Job[] {
  const jobsDir = path.join(CONTENT_DIR, 'jobs');
  const files = getFilesInDirectory(jobsDir);

  const jobs: Job[] = files
    .map((file) => {
      const data = readJsonFile(file);
      if (data) {
        data.id = path.basename(file, '.json');
        data.slug = path.basename(file, '.json');
      }
      return data;
    })
    .filter((job): job is Job => job !== null);

  return jobs;
}

export function getJob(slug: string): Job | null {
  const jobs = getJobs();
  return jobs.find((job) => job.slug === slug) || null;
}

export function getPageContent(page: string): PageContent | null {
  const pageFile = path.join(CONTENT_DIR, 'pages', `${page}.json`);
  return readJsonFile(pageFile);
}
