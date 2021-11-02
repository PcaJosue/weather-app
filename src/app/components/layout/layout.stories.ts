import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { components } from "src/app/component";
import { MaterialModule } from "src/app/material.module";
import { LayoutComponent } from "./layout.component";

export default {
    component: LayoutComponent,
    decorators: [
        moduleMetadata({
            declarations: [LayoutComponent, ...components],
            imports: [MaterialModule, BrowserAnimationsModule, HttpClientModule, FormsModule],
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Layout'
} as Meta

const Template: Story<LayoutComponent> = args => ({
    props: {
        ...args
    }
})

export const Default = Template.bind({});
Default.args = {}