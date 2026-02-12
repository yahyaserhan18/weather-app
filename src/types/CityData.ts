
export type CityData = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id: number;
    timezone: string;
    population: number;
    postcodes: string[];
    country_id: number;
    country: string;
    admin1: string;
    updatedAt?: Date; // Added by app for refresh tracking
}

export type cityDataApiResponse = {
    results: CityData[];
}