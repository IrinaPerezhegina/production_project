import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();
    return (
        // eslint-disable-next-line react/jsx-max-props-per-line
        <Card
            max
            fullHeight
            border="partial"
            padding="24"
            className={className}
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
