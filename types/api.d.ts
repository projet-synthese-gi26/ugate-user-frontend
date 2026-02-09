// types/api.d.ts

// --- AUTH API TYPES ---
import {CreatorInfo, OrganizationInfo} from "@/lib/types/api";

export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    photoUri?: string;
    roles: string[];
    service?: string; // Pour les partenaires
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

// --- U-GATE API TYPES ---
// lib/types/api.ts

// ... autres interfaces

export interface SyndicateDocuments {
    logoUrl: string | null;
    charteUrl: string | null;
    statusUrl: string | null;
    membersListUrl: string | null;
    commitmentCertificateUrl: string | null;
}

export interface SyndicateOrganization {
    legalForm: string;
    socialNetwork: string | null;
    keywords: string;
    email: string | null;
    longName: string;
}

export interface SyndicateCreator {
    id: string;
    fullName: string;
    email: string;
}

export interface SyndicateStats {
    totalMembers: number;
    totalBranches: number;
}

// lib/types/api.ts

export interface Syndicate {
    id: string;
    name: string;
    description: string;
    domain: string;
    type: string;
    isApproved: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;

    // Objets imbriqués existants
    documents: SyndicateDocuments;
    organization: OrganizationInfo;
    creator: CreatorInfo;
    stats: SyndicateStats;

    // --- NOUVEAUX CHAMPS API AJOUTÉS ---
    // Ces champs arrivent quand on appelle /syndicates/mine
    userBranchId?: string;     // ID de la branche du membre
    userBranchName?: string;   // Nom de la branche
    userRole?: 'CUSTOMER' | 'DRIVER' | 'FLEET_MANAGER' | 'ADMIN' | 'PASSENGER' | 'PRESIDENT' | 'MODERATOR' | 'CLIENT';
}


export interface Branch {
    id: string;
    syndicatId: string;
    name: string;
    location: string;
    contact: string;
    bannerUrl?: string;
}

// --- SYSTEM TYPES ---
export type UserRole = 'VISITOR' | 'MEMBER' | 'PARTNER';