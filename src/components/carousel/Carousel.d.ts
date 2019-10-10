import * as React from 'react';

interface CarouselProps {
    id?: string;
    value?: any;
    page?: number;
    header?: any;
    footer?: any;
    style?: object;
    className?: string;
    itemTemplate?: any;
    circular?: boolean;
    autoplayInterval: number;
    numVisible?: number;
    numScroll?: number;
    responsiveOptions?: any;
    orientation?: string;
    verticalContentHeight?: string;
    contentClassName?: string;
    dotsContentClassName?: string;
    onPageChange(e: {page: number}): void;
}

export class Carousel extends React.Component<CarouselProps,any> {}