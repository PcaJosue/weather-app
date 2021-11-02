import { HttpClientModule } from "@angular/common/http";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { components } from "src/app/component";
import { MaterialModule } from "src/app/material.module";
import { WeatherService } from "src/app/services/weather.service";
import { InfoComponent } from "./info.component";

export default {
    component: InfoComponent,
    decorators: [
        moduleMetadata({
            declarations: [InfoComponent],
            imports: [MaterialModule, HttpClientModule],
            providers: [WeatherService]
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Info'
} as Meta

const Template: Story<InfoComponent> = args => ({
    props: {
        ...args
    }
})



export const Centigrades = Template.bind({});
Centigrades.args = {
    info: {
        date: '2021-11-1',
        img: 'Snow',
        temperature: 15,
        ubication: 'Helsinki',
        weather: 'Shower'
    },
    centigrades: true
}


export const Fahrenheit = Template.bind({});
Fahrenheit.args = {
    info: {
        date: '2021-11-1',
        img: 'Snow',
        temperature: 15,
        ubication: 'Helsinki',
        weather: 'Shower'
    },
    centigrades: false
}