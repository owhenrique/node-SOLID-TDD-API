import { inMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { inMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('Should be able to create new challenge submission', async() => {
        const studentsRepository = new inMemoryStudentsRepository();
        const challengesRepository = new inMemoryChallengesRepository();

        const student = Student.create({
            name: 'Paulo',
            email: 'paulo@mail.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionUrl: 'http://www.challenge-01.com'
        })

        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const challangeSubmission = new CreateChallengeSubmission(studentsRepository, challengesRepository);

        const response = await challangeSubmission.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(response).toBeTruthy()
    })
})