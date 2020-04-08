import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeSummaryPage } from './recipe-summary.page';

describe('RecipeSummaryPage', () => {
  let component: RecipeSummaryPage;
  let fixture: ComponentFixture<RecipeSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
