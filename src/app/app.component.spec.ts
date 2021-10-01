import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()

  })

  beforeEach(() => {
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()

  })

  it(`should have as title 'sample-to-do-list-front-end'`, () => {

    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('sample-to-do-list-front-end')

  })

  it(`should create a router-outlet component`, () => {

      const { debugElement } = fixture
  
      let routerOutlet = debugElement.query( By.css('router-outlet') )
      expect(routerOutlet).toBeDefined()

  })

})
