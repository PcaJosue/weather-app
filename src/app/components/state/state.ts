import { Highlight } from "src/app/model/highlight.model";
import { Info } from "src/app/model/info.model";
import { Short } from "src/app/model/short.model";
import { State, Selector, Action, StateContext, Actions } from '@ngxs/store';
import { SetInfo, SetMetric } from "./actions";

export class WeatherStateModel {
    centigrades: boolean;
    shorts: Short[];
    highlights: Highlight[];
    info: Info

}

@State<WeatherStateModel>({
    name: 'weather',
    defaults: {
        centigrades: true,
        shorts: null,
        highlights: null,
        info: null
    }
})
export class WeatherState {

    @Selector()
    static getAll(state: WeatherStateModel) {
        return state;
    }
    @Selector()
    static getMetric(state: WeatherStateModel) {
        return state.centigrades;
    }

    @Selector()
    static getShorts(state: WeatherStateModel) {
        return state.shorts;
    }

    @Selector()
    static getInfo(state: WeatherStateModel) {
        return state.info;
    }

    @Selector()
    static getHighlights(state: WeatherStateModel) {
        return state.highlights;
    }




    @Action(SetMetric)
    setMetric({ patchState, getState }: StateContext<WeatherStateModel>, { payload }: SetMetric) {
        patchState({
            ...getState(),
            centigrades: payload
        })
    }

    @Action(SetInfo)
    setInfo({ patchState, getState }: StateContext<WeatherStateModel>, { payload }: SetInfo) {

        const shorts = payload.consolidated_weather.map((data, index) => {
            return {
                date: index === 0 ? 'Tomorrow' : data.applicable_date,
                img: data.weather_state_name,
                range: {
                    min: data.min_temp.toFixed(2),
                    max: data.max_temp.toFixed(2)
                }
            }
        });

        const today = payload.consolidated_weather[0];
        const highlights = [
            {
                description: 'Wind status',
                info: { value: today.wind_speed.toFixed(2), metric: 'mph' },
                graphic: {
                    icon: 'arrow_drop_down',
                    label: today.wind_direction_compass,
                    type: 'wind',
                    value: today.wind_direction
                }
            },
            {
                description: 'Humidity',
                info: { value: today.humidity, metric: '%' },
                graphic: {
                    label: today.humidity,
                    type: 'humidity'
                }

            },
            {
                description: 'Visibility',
                info: { value: today.visibility.toFixed(2), metric: 'miles' },
            },
            {
                description: 'Air Pressure',
                info: { value: today.air_pressure, metric: 'mb' }
            }
        ];


        patchState({
            info: {
                img: payload.consolidated_weather[0].weather_state_name,
                temperature: payload.consolidated_weather[0].the_temp,
                weather: payload.consolidated_weather[0].weather_state_name,
                date: payload.consolidated_weather[0].applicable_date,
                ubication: payload.parent.title
            },
            shorts: shorts,
            highlights: highlights
        })


    }
}
