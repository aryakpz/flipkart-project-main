export type productPropType = {
    nav: navPropType;
    drop: dropProps[];

}

export type navPropType = {
    fliplogo: string;
    explore: string;
    plus: string;
    plogo: string;
    search: string;
    login: string;
    seller: string;
    more: string;
    down: string;
    cartimg: string;
    cart: string;
};


export type dropProps = {
    data: string;
    icon: string;
}
export type userSignProps = {
    name: string,
    email: string,
    username: string,
    password: string
}
export type userLoginProp = {
    username: string,
    password: string
}

export type mobileProps = {
    brand: string;
    ram: string;
    rom: string;
    screen: string;
    camara: string;
    processor: string;
    warrenty: string;
    price: string;
    discount: string;
    exchange: string;
    image: File| null |any| string;
};

export type responsePropse = {
    message: string;
    success: boolean;
    data: {
        viewProduct: mobileProps[]; 
    };
};
