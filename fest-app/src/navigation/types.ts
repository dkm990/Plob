export type HomeStackParamList = {
  HomeFeed: undefined;
  EventDetails: { eventId: string };
  CreatePlanFromEvent: { eventId: string };
  VenueDetails: { venueId: string };
};

export type PlansStackParamList = {
  PlansList: undefined;
  PlanDetails: { planId: string };
  // TODO: Groups are out of current scope; route retained to avoid breaking navigation types
  GroupDetails: { groupId: string };
  CreatePlan: { preselectedFriendIds?: string[]; activityType?: string; title?: string };
};

export type RootStackParamList = {
  MainTabs: undefined;
  Notifications: undefined;
  PublicPlan: { token: string };
  PublicProfile: { userId: string };
};
