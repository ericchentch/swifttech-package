#!/bin/bash

yarn prisma migrate deploy
yarn initTestData
yarn global add pm2

pm2 start yarn --interpreter bash --name "refresh-kanban-token" -- cronRefreshToken
pm2 start yarn --interpreter bash --name "deactivate-kanban-expire" -- cronDeactiveExpired
pm2 start yarn --interpreter bash --name "delete-kanban-deactivated" -- cronDeleteDeactived
pm2 start yarn --interpreter bash --name "check-user-banking-transactions" -- cronUpdateBalance
pm2 start yarn --interpreter bash --name "warning-out-of-resource-server" -- cronRemindResources
pm2 start yarn --interpreter bash --name "warning-change-gitlab-pat" -- cronGitlab


yarn start