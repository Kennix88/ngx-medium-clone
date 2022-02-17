import {Injectable} from "@angular/core";
import {PopularTagType} from "../../../types/popularTag.type";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {GetPopularTagsResponseInterface} from "../types/getPopularTagsResponse.interface";

@Injectable()
export class PopularTagsService {
  constructor(
    private http: HttpClient
  ) {
  }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    // @ts-ignore
    return this.http.get(url).pipe(map((response: GetPopularTagsResponseInterface) => {return response.tags}))
  }
}
