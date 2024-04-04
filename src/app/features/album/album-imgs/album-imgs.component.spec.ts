import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumImgsComponent } from './album-imgs.component';

describe('AlbumImgsComponent', () => {
  let component: AlbumImgsComponent;
  let fixture: ComponentFixture<AlbumImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumImgsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
