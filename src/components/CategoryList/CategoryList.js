import styles from './categories.module.css'

export const CategoryList = ({ categories, subId }) => {

    const currentEvent = categories?.filter((category) => category.category_id === subId)
    const events = currentEvent?.map((ev) => ev.events)
    const event = events?.[0];

    return (
        <div className={styles.categories}>
            {event?.map((ev) => (
                <div
                    key={ev.id}
                    className={styles.category}

                >
                    {ev.title}
                    <img src={ev?.image} alt='img' />


                </div>
            ))}


        </div>
    );
};
