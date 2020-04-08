import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeTabsPage } from './recipe-tabs.page';

describe('RecipeTabsPage', () => {
  let component: RecipeTabsPage;
  let fixture: ComponentFixture<RecipeTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
