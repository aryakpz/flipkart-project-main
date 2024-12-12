export type productPropType={
    nav:navPropType;
    drop:dropProps[];

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
