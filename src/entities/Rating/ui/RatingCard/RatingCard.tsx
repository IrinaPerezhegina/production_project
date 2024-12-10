import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
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

    const onSelectedStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, feedback, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('your feedback')}
                    />
                </>
            }
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('your feedback')}
                    />
                </>
            }
        />
    );
    const content = (
        <>
            <VStack align="center" gap="8" max>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <TextDeprecated
                            title={
                                starsCount
                                    ? t('Thanks for the assessment')
                                    : title
                            }
                        />
                    }
                    on={
                        <Text
                            title={
                                starsCount
                                    ? t('Thanks for the assessment')
                                    : title
                            }
                        />
                    }
                />

                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelected={onSelectedStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            off={
                                <HStack max gap="16" justify="end">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandler}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('close')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('send')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                            on={
                                <HStack max gap="16" justify="end">
                                    <Button
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandler}
                                    >
                                        {t('close')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('send')}
                                    </Button>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer onClose={cancelHandler} isOpen={isModalOpen} lazy>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            off={
                                <ButtonDeprecated
                                    fullWidth
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                >
                                    {t('send')}
                                </ButtonDeprecated>
                            }
                            on={
                                <Button
                                    fullWidth
                                    onClick={acceptHandler}
                                    size="l"
                                >
                                    {t('send')}
                                </Button>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    max
                    className={classNames('', {}, [className])}
                >
                    {content}
                </CardDeprecated>
            }
            on={
                <Card
                    border="round"
                    padding="24"
                    max
                    data-testid="RatingCard"
                    className={classNames('', {}, [className])}
                >
                    {content}
                </Card>
            }
        />
    );
});
