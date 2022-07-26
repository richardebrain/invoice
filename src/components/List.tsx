interface Currency {
    currency: any
}
const List = ({ currency }: Currency) => {

    if (!currency) return null;
// currency.map((currency: any) => console.log(currency))
    return (
        <>
        
           
           {currency.map((cur: any) => (<option key={cur.name} value={cur.code} > {cur.code}</option>))}
      
        </>
       
    );
}

export default List;