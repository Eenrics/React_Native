import { View } from "react-native"
import Text from "./Text"
import styles from "./styles"
import Button from "./Button"


const ReviewItem = ({review, mine, deleteReview, navigate}) => {

    let d = new Date(review.createdAt)
    const formate = (val) => val.toString().padStart(2, '0')
    const getFormatedDate = `${formate(d.getUTCDate())}.${formate(d.getUTCMonth() + 1)}.${formate(d.getUTCFullYear())}`

    return (
        <View style={{margin: 5, padding: 5}}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.rate}><Text style={styles.rateText}>{review.rating}</Text></View>
                <View style={{flexGrow: 3, padding: 15, position: 'relative'}}>
                    <View style={{width: 250, position: 'relative'}}><Text style={styles.username} fontWeight='bold'>{review.user ? review.user.username : review.repository.fullName}</Text></View>
                    <View><Text style={[styles.date, {position: 'relative'}]}>{getFormatedDate}</Text></View>
                </View>
            </View>
            <View><Text style={{fontSize: 15}}>{review.text}</Text></View>
            {
                mine ? <View style={{flexDirection: 'row'}}>
                        <Button text='View Repository' action={navigate} param={`/${review.repository.id}`} min />
                        <Button text='Delete Repository' action={deleteReview} param={review.id} danger min />
                      </View> : null
            }

        </View>
    )
}

export default ReviewItem