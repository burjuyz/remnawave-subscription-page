import {
    IconBrandAndroid,
    IconBrandApple,
    IconCheck,
    IconCloudDownload,
    IconDeviceDesktop,
    IconDownload,
    IconExternalLink
} from '@tabler/icons-react'
import { Button, Group, Tabs, Text, ThemeIcon, Timeline } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useSubscriptionInfoStoreInfo } from '@entities/subscription-info-store'

export const InstallationGuideWidget = () => {
    const { t } = useTranslation()
    const { remnawaveSubscription } = useSubscriptionInfoStoreInfo()

    const [defaultTab, setDefaultTab] = useState(() => {
        try {
            if (typeof window !== 'undefined' && window.navigator) {
                const userAgent = window.navigator.userAgent.toLowerCase()
                if (userAgent.indexOf('android') !== -1) {
                    return 'android'
                } else if (
                    userAgent.indexOf('iphone') !== -1 || 
                    userAgent.indexOf('ipad') !== -1
                ) {
                    return 'ios'
                }
            }
            return 'desktop'
        } catch (error) {
            return 'desktop'
        }
    })

    if (!remnawaveSubscription) return null

    const { subscriptionUrl } = remnawaveSubscription

    const openclash = () => {
        window.open(`clash://install-config?url=${subscriptionUrl}`, '_blank')
    };

    const openv2rayng = () => {
        window.open(`v2rayng://install-sub/?url=${subscriptionUrl}`, '_blank');
    };

    const openstreisand = () => {
        window.open(`streisand://import/${subscriptionUrl}`, '_blank');
    };
    
    return (
        <Tabs defaultValue={defaultTab}>
            <Group mb="md">
                <Text fw={700} size="xl">
                    {t('installation-guide.widget.instrukciya')}
                </Text>
                <Tabs.List>
                    <Tabs.Tab leftSection={<IconBrandAndroid />} value="android">
                        Android
                    </Tabs.Tab>
                    <Tabs.Tab leftSection={<IconBrandApple />} value="ios">
                        iOS
                    </Tabs.Tab>
                    <Tabs.Tab leftSection={<IconDeviceDesktop />} value="desktop">
                        {t('installation-guide.widget.pk')}
                    </Tabs.Tab>
                </Tabs.List>
            </Group>

            <Tabs.Panel value="android">
                <Timeline active={1} bulletSize={32} color="teal" lineWidth={2}>
                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconDownload size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.install-v2rayng')}
                    >
                        <Text c="dimmed" mb={16} size="sm">
                            {t('installation-guide.widget.open-v2rayng')}
                        </Text>
                        <Button
                            component="a"
                            href="https://play.google.com/store/apps/details?id=com.v2ray.ang"
                            leftSection={<IconExternalLink size={16} />}
                            target="_blank"
                            variant="light"
                        >
                            {t('installation-guide.widget.open-in-google-play')}
                        </Button>
                        <Button
                            component="a"
                            href="https://github.com/2dust/v2rayNG/releases/download/1.9.31/v2rayNG_1.9.31_arm64-v8a.apk"
                            leftSection={<IconExternalLink size={16} />}
                            target="_blank"
                            variant="light"
                        >
                            {t('installation-guide.widget.download-huawei')}
                        </Button>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconCloudDownload size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.add-subscription')}
                    >
                        <Text c="dimmed" mb={16} size="sm">
                            {t('installation-guide.widget.add-subscription-description-v2rayng')}
                        </Text>
                        <Button onClick={openv2rayng} variant="filled">
                            {t('installation-guide.widget.add-subscription-button')}
                        </Button>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconCheck size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.connect-and-use')}
                    >
                        <Text c="dimmed" size="sm">
                            {t('installation-guide.widget.connect-and-use-description-v2rayng')}
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Tabs.Panel>

            <Tabs.Panel value="ios">
                <Timeline active={1} bulletSize={32} color="teal" lineWidth={2}>
                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconDownload size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.install-streisand')}
                    >
                        <Text c="dimmed" mb={16} size="sm">
                            {t('installation-guide.widget.install-app-store-description')}
                        </Text>
                        <Button
                            component="a"
                            href="https://apps.apple.com/us/app/streisand/id6450534064"
                            leftSection={<IconExternalLink size={16} />}
                            target="_blank"
                            variant="light"
                        >
                            {t('installation-guide.widget.open-app-store')}
                        </Button>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconCloudDownload size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.add-subscription')}
                    >
                        <Text c="dimmed" mb={16} size="sm">
                            {t('installation-guide.widget.add-ios-subscription-description')}
                        </Text>
                        <Button onClick={openstreisand} variant="filled">
                            {t('installation-guide.widget.add-subscription-button')}
                        </Button>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconCheck size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.connect-and-use')}
                    >
                        <Text c="dimmed" size="sm">
                            {t('installation-guide.widget.connect-and-use-description-streisand')}
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Tabs.Panel>

            <Tabs.Panel value="desktop">
                <Timeline active={1} bulletSize={32} color="teal" lineWidth={2}>
                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconDownload size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.install-flclash')}
                    >
                        <Text c="dimmed" mb={16} size="sm">
                            {t('installation-guide.widget.install-flclash-description')}
                        </Text>
                        <Group>
                            <Button
                                component="a"
                                href="https://github.com/chen08209/FlClash/releases/latest"
                                leftSection={<IconExternalLink size={16} />}
                                target="_blank"
                                variant="light"
                            >
                                {t('installation-guide.widget.download')}
                            </Button>
                        </Group>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconCloudDownload size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.add-subscription')}
                    >
                        <Text c="dimmed" mb={16} size="sm">
                            {t('installation-guide.widget.add-subscription-pc-description')}
                        </Text>
                        <Button onClick={openclash} variant="filled">
                            {t('installation-guide.widget.add-subscription-button')}
                        </Button>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon color="teal.5" radius="xl" size={26}>
                                <IconCheck size={16} />
                            </ThemeIcon>
                        }
                        title={t('installation-guide.widget.connect-and-use')}
                    >
                        <Text c="dimmed" size="sm">
                            {t('installation-guide.widget.select-server-flclash')}
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Tabs.Panel>
        </Tabs>
    )
}
