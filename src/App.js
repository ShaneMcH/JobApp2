import Header from './Components/Header';
import ShiftCard from './Components/ShiftCard';
import shifts from './shifts.json';

function App() {
	return (
		<>
			<Header />
			<div style={{
				display:'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '90px'
			}}>
				{shifts.map(s => {
					return <ShiftCard key={s.id} data={s} />
				})}
			</div>
		</>
	);
}

export default App;
