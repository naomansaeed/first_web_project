function addItem(cart, item) {
    return [...cart, item];
}

{
  const cart = ['board'];
  const next = addItem(cart, 'wax');
  console.log(cart); // must print ['board']
  console.log(next); // must print ['board', 'wax']
}
// failed attempt
function updateQtyOld(cart, name, newQty) {
    const item = cart.find(entry => entry.name === name);
    if (item) {
        item.qty = newQty; // this mutated
    }
}
// this worked
function updateQty(cart, name, newQty) {
    // map() creates new array automatically by default.
    return cart.map(entry => {
        if (entry.name === name) {
            /*
            * ⚠️ LOAD-BEARING SPREAD: Creates a brand-new object in memory.
            *
            * WITHOUT IT (e.g., entry.qty = newQty):
            * We mutate the original object directly. Because the memory reference 
            * doesn't change, UI frameworks (React/Vue) and state managers (Redux) 
            * will assume nothing changed and skip re-rendering. It also destroys 
            * state history (breaking undo/redo features).
            *
            * WITH IT ({ ...entry, qty: newQty }):
            * We copy all existing properties into a fresh object, override 'qty',
            * and leave the original 'entry' completely untouched (Immutable).
            */
            return {...entry, qty:newQty};
        }
        return entry;
    });
}

{
  const cart = [{ name: 'board', qty: 1 }];
  const next = updateQty(cart, 'board', 2);
  console.log(cart[0].qty); // must print 1 — original item untouched
  console.log(next[0].qty); // must print 2 — updated item in the new cart
}