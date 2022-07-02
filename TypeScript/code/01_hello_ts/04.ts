type Props = {
    id: string,
    age: number,
    sex: string
}

type pick_props = Pick<Props, 'id' | 'age'>;
let people3: pick_props = {
    id: 'Ash',
    age: 23
}