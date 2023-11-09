import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Article} from "../../shared/article.type";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() {
  }

  getFiltered(filters: Set<string> | undefined): Observable<Array<Article>> {
    return of(filters ? this.filter(data, filters) : data)
  }

  getAll(): Observable<Array<Article>> {
    return of(data)
  }

  getArticleById(id: string): Observable<Article | undefined> {
    return of(data.find((article) => article.id == id))
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
    description: `
       <h3>Hello</h3>
      <p>lets see how well this works?</p>
      <i>is it any good?</i>
      <small> I dont know tbh</small>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    `,
    references: [
      {
        name: 'Heart music video',
        url: 'some/url/to/the/reference'
      },
      {
        name: 'ily_bo Instagram',
        url: 'some/url/to/the/reference'
      },
      {
        name: 'HEALTHY EGO Instagram',
        url: 'some/url/to/the/reference'
      }
    ],
    dates: {
      startDate: new Date(),
      endDate: new Date(),
    },
    assets: {
      pictureUrls: [
        'https://makeadifference.media/wp-content/uploads/2021/12/AdobeStock_256195492-2.jpeg',
        'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
        'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
        'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg',
        'https://i.pinimg.com/736x/1f/b2/db/1fb2db770c7e6c31d780ee44b4941d6e.jpg'
      ],
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
    references: [{name: 'ref 1', url: 'some/url/to/the/reference'}],
    dates: {
      startDate: new Date(),
      endDate: new Date(),
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
    references: [{name: 'ref 1', url: 'some/url/to/the/reference'}],
    dates: {
      startDate: new Date(),
      endDate: new Date(),
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
    references: [{name: 'ref 1', url: 'some/url/to/the/reference'}],
    dates: {
      startDate: new Date(),
      endDate: new Date(),
    },
    assets: {
      pictureUrls: [],
      videoUrls: [],
    }
  }
]
