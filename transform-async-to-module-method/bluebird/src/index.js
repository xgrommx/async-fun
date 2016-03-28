const asyncFn = async (a, b, c) => {
    const x = await Promise.resolve(a);
    const y = await Promise.resolve(b);
    const z = await Promise.resolve(c);

    return x + y + z;
};

asyncFn(10, 20, 30).then(sum => console.log(`Sum = ${sum}`));