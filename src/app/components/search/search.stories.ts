import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MaterialModule } from "src/app/material.module";
import { WeatherService } from "src/app/services/weather.service";
import { SearchComponent } from "./search.component";

export default {
    component: SearchComponent,
    decorators: [
        moduleMetadata({
            declarations: [SearchComponent],
            imports: [MaterialModule, HttpClientModule, FormsModule],
            providers: [WeatherService]
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Search'
} as Meta

const Template: Story<SearchComponent> = args => ({
    props: {
        ...args
    }
})



export const Default = Template.bind({});
Default.args = {
}
