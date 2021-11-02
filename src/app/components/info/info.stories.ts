import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { components } from "src/app/component";
import { MaterialModule } from "src/app/material.module";
import { WeatherService } from "src/app/services/weather.service";
import { WeatherState } from "../state/state";
import { InfoComponent } from "./info.component";

export default {
    component: InfoComponent,
    decorators: [
        moduleMetadata({
            declarations: [InfoComponent],
            imports: [MaterialModule, HttpClientModule, NgxsModule.forRoot([WeatherState])],
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

