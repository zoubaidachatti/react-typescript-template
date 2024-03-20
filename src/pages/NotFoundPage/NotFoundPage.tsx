import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Typography>{t('common.page_not_found')}</Typography>
    </Stack>
  );
};

export default NotFoundPage;
