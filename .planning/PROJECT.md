# Планы? / FEST

## Vision

Mobile-first social event discovery and planning app for the Russian market. Users discover events from venues, create shared plans with friends, coordinate via proposals/voting/chat, and finalize meetups.

## Core Value

Bridges the gap between "I found something interesting" and "we actually made a plan and went together." Lightweight coordination that replaces scattered messenger chats.

## Tech Stack

- **Frontend**: React Native + Expo SDK 54 + TypeScript + Zustand
- **Backend**: Spring Boot 3.x + Java 21 + PostgreSQL 17 + Flyway
- **Realtime**: WebSocket (custom JSON protocol)
- **Navigation**: React Navigation 7

## Current State

MVP core is frozen + beta hardening complete. Spring Boot is canonical backend. Next milestone: Content Ops / Real Events Pipeline v1 and V2 feature development.

## Key Constraints

- Russian UI only
- No features beyond MVP scope without explicit approval
- Max 15 participants per plan
- All notifications server-side
- OTP mock (code 1111) for dev
- Backend is single source of truth for all mutations
