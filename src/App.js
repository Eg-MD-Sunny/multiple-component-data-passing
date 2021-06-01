import './App.css';

function App() {
	/*=====>>Fake Product Data [Start]<<=====*/
	const products = [
		{
			name: 'Photoshop',
			price: '$90.99'
		},
		{
			name: 'Illustrator',
			price: '$60.99'
		},
		{
			name: 'PDF Reader',
			price: '$6.99'
		},
		{
			name: 'Premiere Element',
			price: '$249.99'
		},
	]
/*=====>>Fake Product Data [End]<<=====*/	
  return (
    <div className="App">
		<header className="App-header">
			{
				products.map(product =><Product product={product}></Product>)
			}
		</header>
    </div>
  );

  function Product(props){
	  const productStyle={
		  width: '200px',
		  height: '200px',
		  borderRadius: '7px',
		  backgroundColor: 'lightgray',
		  color:'#000',
		  marginBottom:'10px'
	  }
	  return(
		<div style={productStyle}>
			<p>{props.product?.name}</p>
			<p>{props.product?.price}</p>
			<button>Bye Now</button>
		</div>
	  )
  }
}
export default App;
