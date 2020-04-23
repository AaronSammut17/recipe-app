import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeHomePage } from './recipe-home.page';

describe('RecipeHomePage', () => {
  let component: RecipeHomePage;
  let fixture: ComponentFixture<RecipeHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
