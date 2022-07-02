import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./RangerSlider_components"; // example render components - source below

const sliderStyle = {
    position: "relative",
    width: "100%",
};

const defaultValues = [250, 4800];

class Example extends Component {
    state = {
        domain: [5, 5000],
        values: [this.props.rangeValues.min,this.props.rangeValues.max].slice(),
        update: defaultValues.slice(),
        reversed: false,
    };

    onUpdate = (update) => {
        this.setState({ update });
    };

    onChange = (values) => {
        this.setState({ values });
        
    };

    setDomain = (domain) => {
        this.setState({ domain });
    };

    toggleReverse = () => {
        this.setState((prev) => ({ reversed: !prev.reversed }));
    };

    render() {
        const {
            state: { domain, values, update, reversed },
        } = this;

        return (
            <div style={{ width: this.props.width }}>
                <Slider
                    mode={2}
                    step={1}
                    domain={domain}
                    reversed={reversed}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                >
                    <Rail>
                        {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map((handle) => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        domain={domain}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks left={false} right={false}>
                        {({ tracks, getTrackProps }) => (
                            <div className="slider-tracks">
                                {tracks.map(({ id, source, target }) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>
                </Slider>
            </div>
        );
    }
}

export default Example;
