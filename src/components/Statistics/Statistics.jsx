import { StatsCard, Title, Stats, StatsItem, Label, Value } from './Statistics.styled';

export const Statistics = ({title, stats }) => {
    return (
        <StatsCard>
            {title === undefined ? '' : <Title>{title}</Title>}
            <Stats>
                {stats.map( item => (
                <StatsItem key={item.id}>
                    <Label>{item.label}</Label>
                    <Value>{item.percentage}</Value>
                </StatsItem>
                ))}
            </Stats>
        </StatsCard>
    );
}


