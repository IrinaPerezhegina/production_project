import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
   className?: string;
   title?:string;
   feedbackTitle?:string;
   hasFeedback?:boolean;
   onCancel?:(starCount:number)=>void;
   onAccept?:(starCount:number, feedback?:string)=>void;
   rate?:number;
}

export const RatingCard = memo((props:RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const { t } = useTranslation('rating');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectedStars = useCallback((selectedStarsCount:number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, feedback, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack
            max
            gap="32"
            align="start"
        >
            <Text
                title={feedbackTitle}
            />
            <Input value={feedback} onChange={setFeedback} placeholder={t('your feedback')} />
        </VStack>

    );

    return (
        <Card
            max
            className={classNames('', {}, [className])}
        >
            <VStack
                align="center"
                gap="8"
                max
            >
                <Text
                    title={starsCount ? t('Thanks for the assessment') : title}
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelected={onSelectedStars}
                />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack max gap="32">
                        {modalContent}
                        <HStack
                            max
                            gap="16"
                            justify="end"
                        >
                            <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                                {t('close')}
                            </Button>
                            <Button onClick={acceptHandler}>
                                {t('send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    onClose={cancelHandler}
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack gap="32">
                        { modalContent}
                        <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                            {t('send')}
                        </Button>

                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
