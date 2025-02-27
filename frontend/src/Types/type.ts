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
    // name: string,
    // email: string,
    username: string,
    password: string,
    role:"admin"|"user"
}

export type userLoginProp = {
    username: string,
    password: string
}

export type mobileProps = {
    id:any;
    link: string;
    name: string;
    color: string;
    brand: string
    price: number | string;
    ram: string;
    rom: string;
    screen: string;
    frontcamera: String;
    backcamera: String;
    processor: string;
    warranty: string;
    discount: string;
    exchange: string;
    battery: string;
    oldprice: string;
    image: File | null | any;
};

export type responsePropse = {
    message: string;
    success: boolean;
    data: {
        viewProduct: mobileProps[];
    };
};

export type filterProps = {
    search: string;
    brand: string[];
    ram: string[];
    rom: string[]
}
export type sortprops={
    name:string,
    class:string,
    id:string
}


export type orderProps={
    id:number,
    name:string,
    price:number,
    count:number,
    newPrice:number,
    change:string 
}