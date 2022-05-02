import styles from './ShiftCard.module.css';
import { prettyDate, calcPay } from '../logic';
import StarIcon from '@mui/icons-material/Star';

const ShiftCard = (props) => {
    const { data } = props;
    return(
        <div className={styles.ShiftCard}>
            <div className={styles.DatePay}>
                <p className={styles.title}>{prettyDate(data.date)}</p>
                <p>{data.startTime} - {data.endTime}</p>
                <p>{data.department}</p>
                <p className={styles.subTitle} style={{marginTop:'5px'}}>{calcPay()}</p>
            </div>
            <div className={styles.Facility}>
                <div>
                    <p className={styles.subTitle}>{data.facility}</p>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        {new Array(5).fill('').map((s,i) => {
                            return <StarIcon key={i} style={{color:'#fa0',fontSize:14,margin:'5px 0px'}} />
                        })}
                    </div>
                    <p>{data.address.line1}</p>
                    <p>{data.address.postcode} {data.address.state}, {data.address.suburb}</p>
                </div>
            </div>
            <div className={styles.Buttons}>
                <button>APPLY</button>
            </div>
        </div>
    );
}

export default ShiftCard;