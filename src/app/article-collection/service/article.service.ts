import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Article} from "../../shared/article.type";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() {
  }

  getAll(filters: Set<string> | undefined): Observable<Array<Article>> {
    return of(filters ? this.filter(data, filters) : data)
  }

  filter(articles: Array<Article>, filters: Set<string>): Array<Article> {
    return articles.filter((article) => {
      return Array.from(filters).every((filter) => article.keywords.includes(filter));
    });
  }
}


export const data: Array<Article> = [
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music', 'video'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  },
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music1', 'video1'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  },
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music2', 'video2'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  },
  {
    id: 'I22001',
    title: 'HEART',
    coverUrl: 'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
    keywords: ['music', 'video3'],
    artists: ['ily_bo', 'nelson arthur'],
    description: 'This is a dummy text that will later be replaced with some nice words!',
    references: ['some/url/to/the/reference'],
    dates: {
      startDate: '21-11-22',
      endDate: null,
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  }
]
