export interface IVenues {
    address: {
        line1: string;
    }
    city: {
        name: string;
    },
    country: {
        countryCode: string;
    }

}

export interface IEmbedded {
    venues: IVenues[]
}

export interface IImage {
    url: string;
    width?: number;
    height?: number;
}

export interface ISales {
    public: {
        startDateTime: string | Date;
        endDateTime: string | Date;
    }
}

export interface IEvents {
    id: string;
    name: string;
    type: string;
    images: IImage[];
    sales: ISales;
}
