import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ShortComponent } from "./short.component";

export default {
    component: ShortComponent,
    decorators: [
        moduleMetadata({
            declarations: [ShortComponent]
        })
    ],
    excludeStories: /.*Data$/,
    title: 'Shorts'
} as Meta


const Template: Story<ShortComponent> = args => ({
    props: {
        ...args
    }
})


export const Snow = Template.bind({});
Snow.args = {
    short: {
        date: 'Tomorrow',
        img: 'Snow',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: true
}


export const Sleet = Template.bind({});
Sleet.args = {
    short: {
        date: '2021-10-31',
        img: 'Sleet',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: false
}

export const Hail = Template.bind({});
Hail.args = {
    short: {
        date: '2021-10-31',
        img: 'Hail',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: true
}

export const Thunderstorm = Template.bind({});
Thunderstorm.args = {
    short: {
        date: '2021-10-31',
        img: 'Thunderstorm',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: false
}

export const HeavyRain = Template.bind({});
HeavyRain.args = {
    short: {
        date: '2021-10-31',
        img: 'Heavy Rain',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: true
}

export const LightRain = Template.bind({});
LightRain.args = {
    short: {
        date: '2021-10-31',
        img: 'Light Rain',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: false
}

export const Showers = Template.bind({});
Showers.args = {
    short: {
        date: '2021-10-31',
        img: 'Showers',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: false
}

export const HeavyCloud = Template.bind({});
HeavyCloud.args = {
    short: {
        date: '2021-10-31',
        img: 'Heavy Cloud',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: true
}

export const LightCloud = Template.bind({});
LightCloud.args = {
    short: {
        date: '2021-10-31',
        img: 'Light Cloud',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: false
}

export const Clear = Template.bind({});
Clear.args = {
    short: {
        date: '2021-10-31',
        img: 'Clear',
        range: {
            min: 11,
            max: 18
        }
    },
    centigrades: true
}