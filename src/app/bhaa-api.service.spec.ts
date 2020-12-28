import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BhaaApiService } from './bhaa-api.service';

/**
 * https://www.jsmount.com/angular-http-request-testing/
 */
describe('BhaaApiService', () => {
  let service: BhaaApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhaaApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: BhaaApiService = TestBed.get(BhaaApiService);
    expect(service).toBeTruthy();
  });

  it('Test Get HTTP Request with HttpTesting Controller', () => {
    const mockRaceList = [
      {
        "race": 1,
        "name": "Leanne Graham",
        "date": "Bret"
      }
    ];

    service.getRacesHttpRequest().subscribe((resp: any) => {
      console.log("mock resp of get request", resp);
      expect(resp.length).toBeGreaterThanOrEqual(1);
      expect(resp).toEqual(mockRaceList);
    });

    //const request = httpTestingController.expectOne((service as any).getUserURL);
    //expect(request.request.method).toBe("GET");
    //expect(request.cancelled).toBeFalsy();
    //expect(request.request.responseType).toEqual('json');
    //request.flush(mockRaceList);
  });
});
