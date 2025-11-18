const cron = require('node-cron');
const { User } = require('../models');

const scheduledJobs = new Map();

function scheduleRoutineReminders(routine) {
  if (!routine || !routine.items) return;
  // For each item with reminderAt 'HH:MM', schedule a daily cron
  routine.items.forEach(item => {
    if (!item.reminderAt) return;
    const [hour, minute] = item.reminderAt.split(':');
    if (!hour || !minute) return;
    const cronExpr = `${minute} ${hour} * * *`;
    const jobKey = `${routine.userId}-${item.day}-${item.reminderAt}`;
    if (scheduledJobs.has(jobKey)) {
      scheduledJobs.get(jobKey).stop();
      scheduledJobs.delete(jobKey);
    }
    const task = cron.schedule(cronExpr, async () => {
      const user = await User.findByPk(routine.userId);
      if (user && user.expoPushToken) {
        console.log('Would send push to', user.expoPushToken, 'for', item);
        // implement push via Expo push API server-side if desired
      } else {
        console.log('No push token for user', routine.userId);
      }
    });
    scheduledJobs.set(jobKey, task);
  });
}

module.exports = { scheduleRoutineReminders };
