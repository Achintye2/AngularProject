import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fix = TestBed.createComponent(AppComponent);
    const app = fix.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Blogging-app'`, () => {
    const fix = TestBed.createComponent(AppComponent);
    const app = fix.componentInstance;
    expect(app.title).toEqual('Blogging-app');
  });

  it('should render title', () => {
    const fix = TestBed.createComponent(AppComponent);
    fix.detectChanges();
    const compiled = fix.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Blog-app app is running!');
  });
});
