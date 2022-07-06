import { ProfileCard, Description, UserName, Avatar, Tag, Location, Stats, StatsItem, Label, Quantity } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
    <ProfileCard>
        <Description>
            <Avatar alt="User avatar" src={avatar}/>  
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
        </Stats>
    </ProfileCard>
    );
}