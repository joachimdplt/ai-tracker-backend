export interface UserProfile {
  market: string;
  risk: string;
  tempo: string;
  goal: string;
}

export interface UserSubscription {
  productId: string;
  purchaseDate: string;
  expiresDate: string;
  platform: string;
  status: string; // "active" | "expired"
}

export interface User {
  id: string; // original_transaction_id d'Apple
  profile: UserProfile;
  subscription: UserSubscription;
}