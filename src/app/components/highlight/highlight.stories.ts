import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { HighlightComponent } from "./highlight.component";

export default {
    component: HighlightComponent,
    decorators: [
        moduleMetadata({
            declarations: [HighlightComponent],
            imports: [MatIconModule, MatProgressBarModule]
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Highlight'
} as Meta;

const Template: Story<HighlightComponent> = args => ({
    props: {
        ...args
    }
})


export const Wind = Template.bind({});
Wind.args = {
    highlight: {
        description: 'Wind status',
        info: { value: 7, metric: 'mph' },
        graphic: {
            icon: 'arrow_drop_down',
            label: 'WSW',
            type: 'wind'
        }
    }
}

export const Humidity = Template.bind({});
Humidity.args = {
    highlight: {
        description: 'Humidity',
        info: { value: 84, metric: '%' },
        graphic: {
            label: 84,
            type: 'humidity'
        }
    }
}

export const Visibility = Template.bind({});
Visibility.args = {
    highlight: {
        description: 'Visibility',
        info: { value: 6.4, metric: 'miles' },
    }
}

export const Pressure = Template.bind({});
Pressure.args = {
    highlight: {
        description: 'Air Pressure',
        info: { value: 998, metric: 'mb' },
    }
}
