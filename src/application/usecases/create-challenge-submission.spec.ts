import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('Should be able to create new challenge submission', async() => {
        const challangeSubmission = new CreateChallengeSubmission();

        const response = await challangeSubmission.execute({
            studentId: 'fake-student-id',
            challengeId: 'fake-challeng-id'
        })

        expect(response).toBeTruthy()
    })
})