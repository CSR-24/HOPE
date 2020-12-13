import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule} from '@angular/material/select';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatBadgeModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatBadgeModule
    ]
})
export class MaterialModule {}