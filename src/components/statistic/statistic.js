import { Statistic, Title, List, Items, } from './statistic.styled'
import PropTypes from 'prop-types';


export default function Statistics({ title, stats }) {
    return (

        <Statistic>
            <Title>{title}</Title>

            <List>
                {stats.map((stat, index) => (
                    <Items key={stat.id} >
                        <span>{stat.label}</span>
                        <span>{stat.percentage} %</span>
                    </Items>
                ))}
            </List>
        </Statistic >
    );
}
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
};